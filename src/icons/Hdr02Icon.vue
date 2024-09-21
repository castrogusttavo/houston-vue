
<template>
  <Icon :iconName="'hdr-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hdr02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hdr-02'
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
