
<template>
  <Icon :iconName="'circle-arrow-right-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowRightDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-right-double'
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
