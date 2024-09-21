
<template>
  <Icon :iconName="'edit-road'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EditRoadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edit-road'
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
