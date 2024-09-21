
<template>
  <Icon :iconName="'plate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plate'
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
