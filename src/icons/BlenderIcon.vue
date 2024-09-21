
<template>
  <Icon :iconName="'blender'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlenderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blender'
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
