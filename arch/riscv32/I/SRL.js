export default {
	mask: '0000000----------101-----0110011',
	args: {
		rs2: ['24:20'],
		rs1: ['19:15'],
		rd: ['11:7']
	},
	sext: true,
	exec: {
		$: 'rd = rs1 >> (rs2 & 0b111111n)'
	},
	meta: {
		encoding: 'R',
		importance: NaN
	}
}
