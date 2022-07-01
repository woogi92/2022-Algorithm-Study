#include <stdio.h>

int main()
{
    int h, m;

    scanf("%d %d", &h, &m);

    if(m < 45) {
        if(h == 0) {
            h = 23;
        } else {
            h -= 1;
        }
        m += 15;
    } else {
        m -= 45;
    }

    printf("%d %d", h, m);

    return 0;
}

/* 다른 분의 코드
#include <stdio.h>

int main() {
	int h, m;
	scanf("%d %d", &h, &m);

	m -= 45;
	if (m < 0) {
		m += 60;
		h -= 1;

		if (h < 0) h = 23;
	}

	printf("%d %d", h, m);
	
	return 0;
}
*/
