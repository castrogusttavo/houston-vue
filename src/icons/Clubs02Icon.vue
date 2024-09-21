
<template>
  <Icon :iconName="'clubs-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clubs02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clubs-02'
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
