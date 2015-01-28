
	A(1,10) = A(0,A(1,9))
	A(1,10) = A(0,A(0,A(1,8)))
	A(1,10) = A(0,A(0,A(0,A(1,7))))
	A(1,10) = A(0,A(0,A(0,A(0,A(1,6)))))
	.
	.
	.
	.
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,1))))))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,0)))))))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,2)))))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,4))))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,A(0,8)))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,A(0,16))))))
	A(1,10) = A(0,A(0,A(0,A(0,A(0,32)))))
	A(1,10) = A(0,A(0,A(0,A(0,64))))
	A(1,10) = A(0,A(0,A(0,128)))
	A(1,10) = A(0,A(0,265))
	A(1,10) = A(0,512)
	A(1,10) = 1024
for A(m,n) this can be calculate with the equation 2^n^m
so  A(2,4)=(2^4^2)=(2^16)=65536
and A(3,3)=(2^3^3)=(2^27)=134217728 //in the computer this will return 65536 because of memory leak
for example if we try A(2,9) this will return an exception InternalError: too much recursion but theoretically equel 2.4178*10^24
//the second problem in Exercise 1.10
for f(n)
	like above A(0,n)=(2^n^0)=(2^1)=2
for g(n)
	A(1,n)=(2^n^1)=(2^n)
for g(n)
	A(1,n)=(2^n^2)

