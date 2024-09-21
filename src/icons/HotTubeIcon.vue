
<template>
  <Icon :iconName="'hot-tube'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotTubeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hot-tube'
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
