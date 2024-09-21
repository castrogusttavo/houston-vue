
<template>
  <Icon :iconName="'location-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-06'
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
