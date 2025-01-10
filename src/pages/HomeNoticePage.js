import React, { useState, useMemo } from 'react';
import { 
  Calendar, Search, Bookmark,
  Printer, AlertCircle
} from 'lucide-react';

const initialNotices = [
  {
    id: 1,
    title: 'Sydney – 2025 January Orientation 1',
    date: 'January 15, 2025',
    category: 'Admission',
    priority: 'high',
    department: 'Student Affairs',
    description: 'Ridge International College - Sydney Campus Office 101, 30 Cowper Street, Parramatta, NSW, Australia',
    isPublic: true,
    isPinned: true,
    isBookmarked: false,
  },
  {
    id: 2,
    title: 'Melbourne – 2025 January Orientation 1',
    date: 'January 17, 2025',
    category: 'Academic',
    priority: 'urgent',
    department: 'Examinations',
    description: 'Ridge International College - Melbourne Campus Level 5/ 85 Queen Street, Melbourne, Victoria, Australia',
    isPublic: true,
    isPinned: true,
    isBookmarked: false,
  },
  {
    id: 3,
    title: 'Melbourne – 2025 January Orientation 2',
    date: 'January 21, 2025',
    category: 'Facility',
    priority: 'normal',
    department: 'Maintenance',
    description: 'Ridge International College - Melbourne Campus Level 5/ 85 Queen Street, Melbourne, Victoria, Australia',
    isPublic: true,
    isPinned: false,
    isBookmarked: false,
  }
];

const EnhancedNoticeBoard = () => {
  const [notices, setNotices] = useState(initialNotices);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [visibleNotices, setVisibleNotices] = useState(6);

  // Priority styling
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'normal': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter notices based on search term and filters
  const filteredNotices = useMemo(() => {
    return notices
      .filter(notice => {
        const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            notice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            notice.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBookmark = bookmarkedOnly ? notice.isBookmarked : true;
        return matchesSearch && matchesBookmark;
      })
      .slice(0, visibleNotices);
  }, [notices, searchTerm, bookmarkedOnly, visibleNotices]);

  // Handle notice interactions
  const toggleBookmark = (id) => {
    setNotices(notices.map(notice =>
      notice.id === id ? { ...notice, isBookmarked: !notice.isBookmarked } : notice
    ));
  };

  const handlePrint = () => {
    window.print();
  };

  const loadMore = () => {
    setVisibleNotices(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notice Board
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Stay updated with the latest announcements, events, and important information
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setBookmarkedOnly(!bookmarkedOnly)}
                className={`flex items-center gap-2 ${bookmarkedOnly ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <Bookmark className="w-4 h-4" />
                Bookmarked
              </button>
            </div>
          </div>
        </div>

        {/* Pinned Notices */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Pinned Notices</h2>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            {notices.filter(notice => notice.isPinned).map((notice) => (
              <div key={notice.id} className="flex items-center gap-4 py-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <div>
                  <h3 className="font-medium">{notice.title}</h3>
                  <p className="text-sm text-gray-600">{notice.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Notice Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(notice.priority)}`}>
                    {notice.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {notice.date}
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {notice.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {notice.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrint}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Printer className="w-4 h-4 text-gray-500" />
                    </button>
                    <button 
                      onClick={() => toggleBookmark(notice.id)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Bookmark 
                        className={`w-4 h-4 ${notice.isBookmarked ? 'text-blue-500 fill-current' : 'text-gray-500'}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredNotices.length < notices.length && (
          <div className="text-center mt-8">
            <button 
              onClick={loadMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Load More Notices
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedNoticeBoard;