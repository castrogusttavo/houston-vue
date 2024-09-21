
<template>
  <Icon :iconName="'circle-arrow-down-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowDownDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-down-double'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
