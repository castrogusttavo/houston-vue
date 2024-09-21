
<template>
  <Icon :iconName="'location-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Location09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-09'
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
