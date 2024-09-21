
<template>
  <Icon :iconName="'beach-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Beach02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'beach-02'
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
