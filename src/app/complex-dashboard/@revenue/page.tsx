"use client"

import Link from 'next/link'
import { useState } from 'react'
import styles from './revenue.module.css'

export default function Revenue() {
    const [count, setCount] = useState(0)
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Revenue</h1>
            
            <Link href="/complex-dashboard/revenue-data" className={styles.link}>
                Check Revenue Data
            </Link>
            
            <div className={styles.counterCard}>
                <p className={styles.count}>Count: {count}</p>
                <div className={styles.buttonContainer}>
                    <button 
                        onClick={() => setCount(count + 1)}
                        className={styles.incrementButton}
                    >
                        Increment
                    </button>
                    <button 
                        onClick={() => setCount(count - 1)}
                        className={styles.decrementButton}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}