'use client';
import { motion } from 'framer-motion';
 
export default function ProvinceModal({ data, onClose }) {
  return (
    <motion.div  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
    >
      <motion.div  
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl w-[90%] max-w-3xl p-6 relative"
      >
        {/* 内容区与之前版本保持一致 */}
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          &times;
        </button>
        <div className="grid md:grid-cols-2 gap-8">
          <img 
            src={data.imageUrl} 
            alt={data.name} 
            className="rounded-lg h-64 object-cover"
            loading="lazy"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{data.name}</h2> 
            <p className="text-gray-600">{data.description}</p> 
          </div>
        </div>
      </motion.div> 
    </motion.div> 
  );
}