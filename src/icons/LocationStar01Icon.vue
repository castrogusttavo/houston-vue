
<template>
  <Icon :iconName="'location-star-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationStar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-star-01'
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
