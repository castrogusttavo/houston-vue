
<template>
  <Icon :iconName="'google-maps'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleMapsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-maps'
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
