
<template>
  <Icon :iconName="'location-share-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationShare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-share-01'
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
