
<template>
  <Icon :iconName="'location-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-remove-01'
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
