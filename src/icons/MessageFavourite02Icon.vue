
<template>
  <Icon :iconName="'message-favourite-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageFavourite02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-favourite-02'
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
