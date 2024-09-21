
<template>
  <Icon :iconName="'tag-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tag02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tag-02'
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
