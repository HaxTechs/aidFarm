"use client"

import * as React from "react"
import { motion, easeOut } from "framer-motion"

const galleryImages = [
  { src: "/assets/chicks/chick.jpg", title: "Healthy Chicks", category: "Breeding" },
  { src: "/assets/adult-chickens/chicken1.jpg", title: "Premium Broilers", category: "Quality" },
  { src: "/assets/adult-chickens/chicken2.jpg", title: "Free Range", category: "Ethical" },
  { src: "/assets/adult-chickens/chicken3.jpg", title: "Mature Birds", category: "Supply" },
  { src: "/assets/adult-chickens/chicken4.jpg", title: "Farm Fresh", category: "Daily" },
  { src: "/assets/feeding/eat1.jpg", title: "Quality Feed", category: "Nutrition" },
  { src: "/assets/feeding/feed1.jpg", title: "Feeding Time", category: "Care" },
  { src: "/assets/coop/coop1.jpg", title: "Modern Facilities", category: "Infrastructure" },
  { src: "/assets/other/egg.jpg", title: "Fresh Eggs", category: "Products" },
  { src: "/assets/other/egg2.jpg", title: "Grade A", category: "Quality" },
  { src: "/assets/other/egg3.jpg", title: "Daily Collection", category: "Fresh" },
  { src: "/assets/equipments/farmeq1.jpg", title: "Farm Equipment", category: "Technology" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } }
}

export function FarmGallery() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))]
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="bg-muted py-20 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Our Farm
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See Our Operations
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at our modern facilities and healthy poultry
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          key={selectedCategory}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-2">
                  {image.category}
                </span>
                <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FarmGallery