
<template>
  <Icon :iconName="'cosine-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cosine02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cosine-02'
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
