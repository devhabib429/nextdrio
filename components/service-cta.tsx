import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import ContactDialog from "@/components/contact-dialog"
import { useState } from "react"

export default function ServiceCTA() {
  const [showContactDialog, setShowContactDialog] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-black/10 dark:bg-grid-white/10" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your goals. Schedule a consultation or reach out to us directly.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => setShowContactDialog(true)}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => setShowContactDialog(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border">
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">24/7 dedicated support from our team of experts</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border">
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">Tailored solutions to meet your specific needs</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border">
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Track record of successful implementations</p>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactDialog open={showContactDialog} onOpenChange={setShowContactDialog} />
    </section>
  )
} 