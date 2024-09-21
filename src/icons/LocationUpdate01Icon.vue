
<template>
  <Icon :iconName="'location-update-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationUpdate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-update-01'
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
