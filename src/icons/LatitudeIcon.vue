
<template>
  <Icon :iconName="'latitude'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LatitudeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'latitude'
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
