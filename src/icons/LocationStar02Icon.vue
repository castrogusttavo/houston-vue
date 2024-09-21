
<template>
  <Icon :iconName="'location-star-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationStar02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-star-02'
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
