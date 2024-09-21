
<template>
  <Icon :iconName="'file-music'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileMusicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-music'
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
