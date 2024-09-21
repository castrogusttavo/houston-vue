
<template>
  <Icon :iconName="'muslim'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MuslimIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'muslim'
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
