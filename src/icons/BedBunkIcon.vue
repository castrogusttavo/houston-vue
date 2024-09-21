
<template>
  <Icon :iconName="'bed-bunk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BedBunkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bed-bunk'
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
