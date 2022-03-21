
## 2022

- ** FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear) **
    Liang He, Hong Hu, Purui Su, Yan Cai and Zhenkai Liang<br>
    In *Proceedings of the 31st USENIX Security Symposium (USENIX 2022)*<br>


- ** Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation (To Appear) **
    Peng Xu, Yanhao Wang, Hong Hu and Purui Su<br>
    In *Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)*<br>
[:link:](https://github.com/TCA-ISCAS/Cooper)

- ** Who Goes First? Detecting Go Concurrency Bugs via Message Reordering **
    Ziheng Liu, Shihao Xia, Yu Liang, Linhai Song and Hong Hu<br>
    In *Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)*<br>
[:link:](https://github.com/system-pclub/GFuzz)

    ??? Abstract

        Go is a young programming language invented to build safe and efficient concurrent programs. It provides goroutines as lightweight threads and channels for inter-goroutine communication. Programmers are encouraged to explicitly pass messages through channels to connect goroutines, with the purpose of reducing the chance of making programming mistakes and introducing concurrency bugs. Go is one of the most beloved programming languages and has already been used to build many critical infrastructure software systems in the data-center environment. However, a recent study shows that channel-related concurrency bugs are still common in Go programs, severely hurting the reliability of Go applications.
        
        This paper presents GFuzz, a dynamic detector that can effectively pinpoint channel-related concurrency bugs by mutating the processing orders of concurrent messages. We build GFuzz in three steps. We first adopt an effective approach to identify concurrent messages and transform a program to process those messages in any given order. We then take a fuzzing approach to generate new processing orders by mutating exercised ones and rely on execution feedback to prioritize orders close to triggering bugs. Finally, we design a runtime sanitizer to capture triggered bugs that are missed by the Go runtime. We evaluate GFuzz on seven popular Go software systems, including Docker, Kubernetes, and gRPC. GFuzz finds 184 previously unknown bugs and reports a negligible number of false positives. Programmers have already confirmed 124 reports as real bugs and fixed 67 of them based on our reporting. A careful inspection of the detected concurrency bugs from gRPC shows the effectiveness of each component of GFuzz and confirms the components’ rationality.
        
        

## 2021

- ** Identifying Behavior Dispatchers for Malware Analysis **
    Kyuhong Park, Burak Sahin, Yongheng Chen, Jisheng Zhao, Evan Downing, Hong Hu and Wenke Lee<br>
    In *Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)*<br>
[:link:](https://github.com/kp2bit/bdhunter)

- ** Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems **
    Libo Chen, Yanhao Wang, Quanpu Cai, Yunfan Zhan, Hong Hu, Jiaqi Linghu, Qinsheng Hou, Chao Zhang, Haixin Duan and Zhi Xue<br>
    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*<br>
[:link:](https://github.com/NSSL-SJTU/SaTC)

- ** Abusing Hidden Properties to Attack the Node.js Ecosystem **
    Feng Xiao, Jianwei Huang, Yichang Xiong, Guangliang Yang, Hong Hu, Guofei Gu and Wenke Lee<br>
    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*<br>
[:link:](https://github.com/xiaofen9/Lynx)

- ** Preventing Use-After-Free Attacks with Fast Forward Allocation **
    Brian Wickman, Hong Hu, Insu Yun, Daehee Jang, JungWon Lim, Sanidhya Kashyap and Taesoo Kim<br>
    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*<br>
[:link:](https://github.com/bwickman97/ffmalloc)

- ** One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation **
    Yongheng Chen, Rui Zhong, Hong Hu, Hangfan Zhang, Yupeng Yang, Dinghao Wu and Wenke Lee<br>
    In *Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)*<br>
[:link:](https://github.com/s3team/Polyglot)

- ** WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning **
    Jinho Jung, Stephen Tong, Hong Hu, Jungwon Lim, Yonghwi Jin and Taesoo Kim<br>
    In *Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)*<br>
[:link:](https://github.com/sslab-gatech/winnie)