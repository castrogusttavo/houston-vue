
<template>
  <Icon :iconName="'play-list-favourite-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayListFavourite02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-list-favourite-02'
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
