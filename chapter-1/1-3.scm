; Exercise 1.3.  Define a procedure that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.
(define (f x y z)
        (cond ((is-min x y z) (sum-squares y z))
              ((is-min y z x) (sum-squares x z))
              ((is-min z y x) (sum-squares y x))))

(define (is-min x a b) (and (< x a) (< x b)))

(define (sum-squares x y) (+ (square x) (square y)))

(define (square x) (* x x))
