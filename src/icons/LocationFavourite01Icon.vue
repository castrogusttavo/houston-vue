
<template>
  <Icon :iconName="'location-favourite-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationFavourite01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-favourite-01'
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
