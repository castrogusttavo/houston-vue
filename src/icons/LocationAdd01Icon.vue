
<template>
  <Icon :iconName="'location-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-add-01'
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
