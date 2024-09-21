
<template>
  <Icon :iconName="'location-check-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationCheck01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-check-01'
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
