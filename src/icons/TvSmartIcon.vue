
<template>
  <Icon :iconName="'tv-smart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TvSmartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tv-smart'
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
