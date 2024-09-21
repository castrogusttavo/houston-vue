
<template>
  <Icon :iconName="'jpg-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Jpg02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jpg-02'
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
