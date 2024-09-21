
<template>
  <Icon :iconName="'dropbox'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DropboxIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dropbox'
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
