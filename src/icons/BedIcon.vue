
<template>
  <Icon :iconName="'bed'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bed'
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
