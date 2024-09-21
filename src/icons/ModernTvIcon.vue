
<template>
  <Icon :iconName="'modern-tv'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ModernTvIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'modern-tv'
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
