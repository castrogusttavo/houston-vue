
<template>
  <Icon :iconName="'china-temple'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChinaTempleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'china-temple'
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
