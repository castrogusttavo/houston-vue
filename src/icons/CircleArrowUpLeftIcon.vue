
<template>
  <Icon :iconName="'circle-arrow-up-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowUpLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-up-left'
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
