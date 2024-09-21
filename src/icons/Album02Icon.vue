
<template>
  <Icon :iconName="'album-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Album02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'album-02'
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
