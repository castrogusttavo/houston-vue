
<template>
  <Icon :iconName="'tv-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tv02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tv-02'
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
