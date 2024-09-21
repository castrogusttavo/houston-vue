
<template>
  <Icon :iconName="'taj-mahal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TajMahalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'taj-mahal'
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
