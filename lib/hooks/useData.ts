import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { mockEvents, mockCareers, mockInquiries } from '@/lib/mock-data';

export function useData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchMockData = async () => {
      setLoading(true);
      try {
        let mockData: any[] = [];
        if (url.includes('events')) mockData = mockEvents;
        if (url.includes('careers')) mockData = mockCareers;
        if (url.includes('inquiries')) mockData = mockInquiries;
        
        setData(mockData as T[]);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchMockData();
  }, [url]);

  const addItem = async (newItem: Partial<T>) => {
    try {
      // Simulate API call
      const mockNewItem = {
        _id: Date.now().toString(),
        ...newItem
      };
      setData(prev => [...prev, mockNewItem as T]);
      toast.success('Item added successfully');
      return mockNewItem;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to add item';
      toast.error(message);
      throw err;
    }
  };

  const updateItem = async (id: string, updatedItem: Partial<T>) => {
    try {
      // Simulate API call
      setData(prev => prev.map(item => 
        (item as any)._id === id ? { ...item, ...updatedItem } : item
      ));
      toast.success('Item updated successfully');
      return updatedItem;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update item';
      toast.error(message);
      throw err;
    }
  };

  const deleteItem = async (id: string) => {
    try {
      // Simulate API call
      setData(prev => prev.filter(item => (item as any)._id !== id));
      toast.success('Item deleted successfully');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete item';
      toast.error(message);
      throw err;
    }
  };

  return { data, loading, error, addItem, updateItem, deleteItem };
} 