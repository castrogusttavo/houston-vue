
<template>
  <Icon :iconName="'circle-arrow-reload-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowReload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-reload-02'
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
