import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SessionData {
  viewedProducts: number[];
  visitedCategories: string[];
  scrollPositions: Record<string, number>;
  lastVisited: string;
  sessionId: string;
}

interface SessionContextType {
  session: SessionData;
  trackProductView: (productId: number) => void;
  trackCategoryVisit: (categoryKey: string) => void;
  saveScrollPosition: (path: string, position: number) => void;
  getScrollPosition: (path: string) => number;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SESSION_KEY = "enormous_tiger_session";
const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SessionData>(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const isExpired = Date.now() - parsed.timestamp > SESSION_DURATION;
      if (!isExpired) {
        return parsed.data;
      }
    }
    return {
      viewedProducts: [],
      visitedCategories: [],
      scrollPositions: {},
      lastVisited: "/",
      sessionId: generateSessionId()
    };
  });

  useEffect(() => {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        data: session,
        timestamp: Date.now()
      })
    );
  }, [session]);

  const trackProductView = (productId: number) => {
    setSession((prev) => ({
      ...prev,
      viewedProducts: prev.viewedProducts.includes(productId)
        ? prev.viewedProducts
        : [...prev.viewedProducts, productId]
    }));
  };

  const trackCategoryVisit = (categoryKey: string) => {
    setSession((prev) => ({
      ...prev,
      visitedCategories: prev.visitedCategories.includes(categoryKey)
        ? prev.visitedCategories
        : [...prev.visitedCategories, categoryKey],
      lastVisited: `/category/${categoryKey}`
    }));
  };

  const saveScrollPosition = (path: string, position: number) => {
    setSession((prev) => ({
      ...prev,
      scrollPositions: { ...prev.scrollPositions, [path]: position }
    }));
  };

  const getScrollPosition = (path: string): number => {
    return session.scrollPositions[path] || 0;
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        trackProductView,
        trackCategoryVisit,
        saveScrollPosition,
        getScrollPosition
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }
  return context;
}
