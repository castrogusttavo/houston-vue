
<template>
  <Icon :iconName="'share-location-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShareLocation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'share-location-01'
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
