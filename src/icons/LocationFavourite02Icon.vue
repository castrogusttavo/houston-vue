
<template>
  <Icon :iconName="'location-favourite-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationFavourite02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-favourite-02'
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
